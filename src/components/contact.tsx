import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Card } from "@/components/ui/card";

export default function ContactForm() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-3xl px-8 lg:px-0">
        <Card className="mx-auto mt-12 max-w-lg p-8 shadow-md sm:p-16">
          <div>
            <h2 className="text-xl font-semibold">
              Lets get you to the right place
            </h2>
            <p className="mt-4 text-sm">
              Reach out to our sales team! We’re eager to learn more about how
              you plan to use our application.
            </p>
          </div>

          <form
            action=""
            className="**:[&>label]:block mt-12 space-y-6 *:space-y-3"
          >
            <div>
              <Label htmlFor="name">Full name</Label>
              <Input type="text" id="name" required />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" required />
            </div>

            <div>
              <Label htmlFor="msg">Message</Label>
              <Textarea id="msg" rows={3} />
            </div>

            <Button>Submit</Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
