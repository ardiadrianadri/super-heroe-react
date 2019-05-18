import {message, danger, fail} from "danger"

message(`
Hola a todos soy devVox 3000 un bot venido del futuro (se que cuesta de creer pero realmente no existo)
que esta aqui mismo para asegurse de que tus cambios en el código son dignos de una raza superior
`);

const reviewers = danger.github.requested_reviewers.users;

if (reviewers.length === 0 ) {
    fail('Pero bueno!!! te crees que puedes colar un cambio en mi guardia sin revisores y que no me de cuenta?');
}