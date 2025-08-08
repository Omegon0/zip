import { Form, ActionPanel, Action, showToast } from "@raycast/api";
import { runAppleScript } from "@raycast/utils";

type Values = {
  filename: string;
  filecontent: string;
};

export default function Command() {
  function handleSubmit(values: Values) {
    const res = runAppleScript(
      `
on run {filetitle, filecontents}
	set newline to "./newlog.zsh " & filetitle & " " & filecontents
	do shell script newline
end run
`,
      [values.filename, [values.filecontent]]
    );
  }

  return (
    <Form
      actions={
        <ActionPanel>
          <Action.SubmitForm onSubmit={handleSubmit} />
        </ActionPanel>
      }
    >
      <Form.Description text="Enter log here" />
      <Form.TextField id="filename" title="Log name" placeholder="Enter log name" />
      <Form.TextArea id="filecontent" title="Log content" placeholder="Enter details here" />
    </Form>
  );
}

