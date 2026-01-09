import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProfileTabs() {
  return (
    <div className="flex w-full flex-col gap-6 pt-5">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card className="text-sm lg:text-base">
            <CardHeader>
              <CardTitle>Your Details</CardTitle>
            </CardHeader>
            <CardContent className="grid lg:grid-cols-2 gap-6">
              <p>
                Your last personality result - {" "}
                <a href="/database" className="underline text-blue-500">
                  Character
                </a>
              </p>
              <p>Points - 100</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="history"></TabsContent>
      </Tabs>
    </div>
  );
}
