import {message, danger, fail} from "danger"

if (!danger.github.pr.assignee) {
  fail('This pull request needs an assignee and optionally include any reviewers')
}
const modifiedMD = danger.git.modified_files.join("- ")
message("Changed Files in this PR: \n - " + modifiedMD)