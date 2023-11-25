import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function CardWithForm() {
  return (
    <Card className="w-[270px] xl:w-[500px] xl:h-[500px]">
      <CardHeader>
        <CardTitle>Entre em contato</CardTitle>
        <CardDescription>Venha</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" placeholder="Nome" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input id="name" placeholder="Email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="objective">Objetivo</Label>
              <Select>
                <SelectTrigger id="objective">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Enem</SelectItem>
                  <SelectItem value="sveltekit">Vestibular</SelectItem>
                  <SelectItem value="astro">Concurso</SelectItem>
                  <SelectItem value="nuxt">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex ">
       
        <Button className="flex w-full self-end ">Matricule-se já</Button>
      </CardFooter>
    </Card>
  )
}
