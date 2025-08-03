import { Action, ActionPanel, Clipboard, Form, Icon, showToast, Toast } from "@raycast/api";
import { showHUD } from "@raycast/api";
import { runAppleScript } from "@raycast/utils";
import got from "got";
import { Clipboard } from "@raycast/api";

export default async function () {
  const clip = await Clipboard.readText();
  const res = await runAppleScript(
    `
on run {targetBuddyPhone, targetMessage}
    tell application "Messages"
        set targetService to 1st service whose service type = iMessage
        set targetBuddy to buddy targetBuddyPhone of targetService
        send targetMessage to targetBuddy
    end tell
end run
`,
    [["1234567890"], [clip]]
  );
  await showHUD(res);
}
