import {message, danger, fail} from "danger"

if (!danger.github.pr.assignee) {
  fail('This pull request needs an assignee and optionally include any reviewers')
}

if (danger.github.pr.body.length === 0) {
  fail('The pull request should have a description')
}

const modifiedMD = danger.git.modified_files.join("- ")
message("Changed Files in this PR: \n - " + modifiedMD)