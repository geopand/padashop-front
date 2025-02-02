import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const LoginPage = () => {
    return (
        <div className="">
            <div className="flex flex-row justify-center mt-28 ">

                <Tabs defaultValue="login" className="w-[400px]">
                    <TabsList>
                        <TabsTrigger value='login'>Είσοδος χρήστη</TabsTrigger>
                        <TabsTrigger value='register'>Εγγραφή νέου χρήστη</TabsTrigger>
                    </TabsList>
                    <TabsContent value='login'>
                        <Card className="w-[350px]">
                            <CardHeader>
                                <CardTitle>Είσοδος</CardTitle>
                                <CardDescription>Πραγματοποιήστε είσοδο στο κατάστημα με το λογαριασμό σας</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form >
                                    <div className="grid w-full items-center gap-4">
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="email">Email</Label>
                                            <Input type="email" id="email" placeholder="Email" />
                                        </div>
                                        <div className="flex flex-col space-y-1.5">
                                            <Label htmlFor="email">Κωδικός</Label>
                                            <Input type="password" id="password" placeholder="Κωδικός" />
                                        </div>
                                    </div>
                                </form>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button variant="outline">Ακύρωση</Button>
                                <Button>Είσοδος</Button>
                            </CardFooter>
                        </Card>




                    </TabsContent>
                    <TabsContent value='register'>
                            <Card className="w-[350px]">
                                <CardHeader>
                                    <CardTitle>Εγγραφή</CardTitle>
                                    <CardDescription>Πραγματοποιήστε εγγραφή στο κατάστημά μας για να παραγγείλετε</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form >
                                        <div className="grid w-full items-center gap-4">
                                            <div className="flex flex-col space-y-1.5">
                                                <Label htmlFor="email">Email</Label>
                                                <Input type="email" id="email" placeholder="Email" />
                                            </div>
                                            <div className="flex flex-col space-y-1.5">
                                                <Label htmlFor="email">Κωδικός</Label>
                                                <Input type="password" id="password" placeholder="Κωδικός" />
                                            </div>
                                        </div>
                                    </form>
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    <Button variant="outline">Ακύρωση</Button>
                                    <Button>Εγγραφή</Button>
                            </CardFooter>
                            </Card>
                    </TabsContent>
                </Tabs>


            </div>
        </div>
    );
}

export default LoginPage;