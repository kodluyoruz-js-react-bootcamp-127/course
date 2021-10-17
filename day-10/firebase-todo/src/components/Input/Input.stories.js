import Input from "./Input";

export default {
  title: "Kodluyoruz/Input",
  component: Input,
  args: {
    value: "Hi!",
    error: true,
  },
};

export const Default = (props) => <Input {...props} />;
