/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/7iFBUuJMjtp
 */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export function Components() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <header className="w-full px-4 py-6 flex justify-between items-center bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <Link
          className="text-2xl font-bold text-gray-900 dark:text-gray-100"
          href="#"
        >
          John Doe Loans
        </Link>
        <nav className="space-x-4">
          <Link
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            href="#"
          >
            Services
          </Link>
          <Link
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            href="#"
          >
            Testimonials
          </Link>
          <Link
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="bg-gray-100 dark:bg-gray-800 py-20 px-4 text-center">
          <img
            alt="John Doe"
            className="mx-auto rounded-full"
            height="200"
            src="/placeholder.svg"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
          <h1 className="mt-8 text-4xl font-bold text-gray-900 dark:text-gray-100">
            John Doe
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Experienced loan officer with a demonstrated history of working in
            the financial services industry. Skilled in Negotiation, Commercial
            Lending, Banking, Sales, and Credit Analysis.
          </p>
        </section>
        <section className="py-20 px-4" id="services">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
            Services
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Residential Loans</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Helping you find the best loans for your dream home.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Commercial Loans</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Providing financing solutions for your business needs.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Refinancing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  Assisting you in making the right refinancing decisions.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section
          className="bg-gray-100 dark:bg-gray-800 py-20 px-4"
          id="testimonials"
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
            Testimonials
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  "John was extremely helpful and made the loan process a
                  breeze. Highly recommend!"
                </p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  - Jane Smith
                </p>
              </CardFooter>
            </Card>
            <Card>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  "John's expertise and professionalism were invaluable. He
                  guided us through every step."
                </p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  - Mike Johnson
                </p>
              </CardFooter>
            </Card>
            <Card>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">
                  "John made refinancing our home an easy and smooth process. He
                  was there to answer all our questions."
                </p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  - Emily Davis
                </p>
              </CardFooter>
            </Card>
          </div>
        </section>
        <section className="py-20 px-4" id="contact">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
            Contact
          </h2>
          <div className="mt-12 max-w-md mx-auto">
            <form className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Enter your message" />
              </div>
              <Button className="w-full" type="submit">
                Submit
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 px-4 bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © John Doe Loans
          </p>
          <nav className="space-x-4">
            <Link
              className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
              href="#"
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
