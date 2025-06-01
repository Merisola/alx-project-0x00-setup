import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold mb-4">Landing Page</h1>

      <Card />

      <div className="p-6 space-y-4">
        <h1 className="text-2xl font-semibold">Landing Page</h1>
        <Button title="Small Button" size="small" shape="rounded-sm" />
        <Button title="Medium Button" size="medium" shape="rounded-md" />
        <Button title="Extra Button" size="large" shape="rounded-lg" />
        <Button title="Full Button" size="medium" shape="rounded-full"/>
      </div>
    </div>
  );
};

export default Landing;
