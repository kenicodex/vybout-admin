// src/app/page.tsx
import { Button, Input, Card, Modal, Text } from "@/components/ui";

export default function Page() {
  return (
    <main className="p-10 space-y-6">
      <Text variant="h1">Reusable Component System Demo</Text>

      <Card title="Buttons">
        <div className="flex gap-3">
          <Button variant="default">Primary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </Card>

      <Card title="Inputs">
        <Input placeholder="Your name" />
      </Card>

      <Card title="Modal">
        <Modal title="Example Modal" trigger="Open Modal">
          <p>This is a reusable modal component!</p>
        </Modal>
      </Card>
    </main>
  );
}
