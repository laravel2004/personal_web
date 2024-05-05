import AboutMe from "@/components/organisms/AboutMe";
import Hero from "@/components/organisms/Hero";
import HomeTemplate from "@/components/templates/HomeTemplate";

export default function Home() {
  return (
    <HomeTemplate>
      <Hero />
      <AboutMe />
    </HomeTemplate>
  )
}
