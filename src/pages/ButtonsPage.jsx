import { PrimaryButton, SecondaryButton } from '../components/Button';

export default function ButtonsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Buttons</h1>

      <div className="flex gap-4">
        <PrimaryButton label="Primary Button" />
        <SecondaryButton label="Secondary Button" />
      </div>
    </div>
  );
}
