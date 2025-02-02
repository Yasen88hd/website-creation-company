import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";

type TeamMember = {
  id: 1;
  name: string;
  roles: string;
  img_url: string | null;
};

const imagesBaseUrl = "http://localhost:4000/uploads/";

async function getTeamMembers(): Promise<TeamMember[]> {
  return axios
    .get("http://localhost:4000/team-info")
    .then((response) => {
      const teamMembers: TeamMember[] = response.data;

      for (const m of teamMembers) {
        m.img_url = m.img_url ? imagesBaseUrl + m.img_url : null;
      }

      return teamMembers;
    })
    .catch((error) => {
      console.error("Error fetching team info:", error.message);
      return [];
    });
}

export default async function Team() {
  const teamMembers = await getTeamMembers();

  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index}>
              <CardHeader>
                <Image
                  src={
                    member.img_url || "/placeholder.svg?height=200&width=200"
                  }
                  alt={member.name}
                  width={200}
                  height={200}
                  className="w-40 h-40 rounded-full mx-auto mb-4"
                />
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.roles}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
