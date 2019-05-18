/* eslint-disable no-undef */
import { message, danger, fail } from 'danger';

const fails = [];
const leng = danger.github.commits.length;
const lastCommit = danger.github.commits[leng - 1];
const owner = process.env.GITHUB_OWNER || 'ardiadrianadri';
const repoName = process.env.GITHUB_REPO || 'super-heroe-react';
const validBranchName = /^(feature|bugfix|refactor|hotfix)\/.*$/g;

message(`
Hola a todos soy devVox 3000 un bot venido del futuro (se que cuesta de creer pero realmente no existo)
que esta aqui mismo para asegurse de que tus cambios en el código son dignos de una raza superior
`);

const validGithubIssue = /issue #[0-9]{1,5}/gm;

function checkReviewers() {
  const reviewers = danger.github.requested_reviewers.users;

  if (reviewers.length === 0) {
    fails.push(
      'Pero bueno!!! te crees que puedes colar un cambio en mi guardia sin revisores y que no me de cuenta?'
    );
  }
}

function checkErrors() {
  let errors = '';

  if (fails.length > 0) {
    errors = fails.reduce(
      (prev, current) => (prev += current),
      `Esto no puede tolerarse. Estos cambios no son dignos de una raza superior. Mira lo que has hecho: `
    );

    fail(errors);
  } else {
    message(`
         Oh... Dios... mio. Que bonito, que obra de arte. Este codigo es todo un orgullo para ti
         y para toda tu raza
        `);
  }
}

function checkIssue() {
  if (!validGithubIssue.test(danger.github.pr.body)) {
    fails.push(
      `Si no me explicas que estas intentando solucionar con estos cambios no lo voy a saber.
      Haz el favor de añadirme el codigo de la issue que estas intentando solucionar precedido de 
      la palabra "issue"
      `
    );
  }
}

function checkBody() {
  if (danger.github.pr.body.length === 0) {
    fails.push(`
     ¿Me has visto cara de adivino? Como diablos quieres que sepa que estas intentando hacer aqui
     Si no me colocas al menos una descripción de tus cambios
    `);
  }
}

async function checkBranch() {
  const githubResponse = await danger.github.api.request(
    `/repos/${owner}/${repoName}/commits/${lastCommit.sha}/branches-where-head`,
    {
      headers: {
        accept: 'application/vnd.github.groot-preview+json'
      }
    }
  );

  const branches = githubResponse.data;
  const branch = branches[branches.length - 1];

  if (!validBranchName.test(branch.name)) {
    fails.push(
      `Venga ya hombre!!! Que tiempo de cambio estas intentando hacer? Nombra la rama como es
      debido; con feature, refactor, bugfix o hotfix`
    );
  }
}

checkBranch()
.then(() => {
    checkBody();
    checkIssue();
    checkReviewers();
    checkErrors();
});
