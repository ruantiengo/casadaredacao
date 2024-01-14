import React from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import Link from "next/link";

type SkilldCardProps = {
  title: string;
  description: string;
  content: string;
};
const SkillCard = ({ content, description, title }: SkilldCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <CardFooter>
        <Link href="https://wa.me/553199381037" target="_blank">
          <Button>Saiba mais</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default SkillCard;
