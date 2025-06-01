import Card from "@/components/Card";
import Button from "../components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold mb-4">Landing Page</h1>

      <Card />

      <div>
        <h2 className="text-xl font-bold mb-2">Custom Buttons</h2>

        <div className="flex flex-wrap gap-4">
          <Button title="Small Button" size="small" shape="rounded-sm" />
          <Button title="Medium Button" size="medium" shape="rounded-md" />
          <Button title="Large Button" size="large" shape="rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
