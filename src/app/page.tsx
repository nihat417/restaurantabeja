import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex flex-wrap justify-center gap-4 bg-[#FCFCFC] p-4">

      {/* Card Component */}
      <Card className="bg-black text-white w-80 m-auto">
        <CardHeader className="p-0">
          <img
            src="https://cdn.vectorstock.com/i/1000v/26/58/design-menu-fast-food-vector-11812658.jpg"
            alt="Card Image"
            className="w-full h-48 object-cover"
          />
        </CardHeader>
        <CardContent className="my-4">
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardContent>
      </Card>
      
    </main>
  );
}
