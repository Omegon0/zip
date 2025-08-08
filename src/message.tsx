import { Form, ActionPanel, Action, showToast, showHUD } from "@raycast/api";
import { runAppleScript } from "@raycast/utils";

type Values = {
  message: string;
  recipient: string;
  normal: string;
};

export default function Command() {
  function handleSubmit(values: Values) {
    if (values.normal != "other") {
      values.recipient = values.normal;
    }
    const res = runAppleScript(
      `
on run {targetBuddyPhone, targetMessage}
    tell application "Messages"
        set targetService to 1st service whose service type = iMessage
        set targetBuddy to buddy targetBuddyPhone of targetService
        send targetMessage to targetBuddy
    end tell
end run
`,
      [values.recipient, [values.message]]
    );
    showHUD("Message sent");

    showToast({ title: "Submitted form", message: "See logs for submitted values" });
  }

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm onSubmit={handleSubmit} />
        </ActionPanel>
      }
    >
      <Form.Description text="Send a message to a phone number." />
      <Form.TextField id="message" title="Message" placeholder="Enter message" />
      <Form.TextField id="recipient" title="Recipient" placeholder="Enter recipient" />
      <Form.Dropdown id="normal" title="Dropdown" defaultValue="other" >
        <Form.Dropdown.Item value="other" title="other" />"
        <Form.Dropdown.Item value="1234567890" title="Name" />
        <Form.Dropdown.Item value="1234567890" title="Name" />
        <Form.Dropdown.Item value="1234567890" title="Name" />
        <Form.Dropdown.Item value="1234567890" title="Name" />
        <Form.Dropdown.Item value="1234567890" title="Name" />
        <Form.Dropdown.Item value="1234567890" title="Name" />
        <Form.Dropdown.Item value="1234567890" title="Name" />
        <Form.Dropdown.Item value="1234567890" title="Name" />
        <Form.Dropdown.Item value="1234567890" title="Name" />
      </Form.Dropdown>
    </Form>
  );
}
