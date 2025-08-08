import { Form, ActionPanel, Action, showToast } from "@raycast/api";

type Values = {
  filename: string;
  filecontent: string;
};

export default function Command() {
  function handleSubmit(values: Values) {
    console.log(values);
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
      <Form.Description text="Enter log here" />
      <Form.TextField id="filename" title="Log name" placeholder="Enter log name" />
      <Form.TextArea id="filecontent" title="Log content" placeholder="Enter details here" />
    </Form>
  );
}
