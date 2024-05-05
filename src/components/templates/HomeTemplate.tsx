import NavbarHome from "../organisms/Navbar";

export default function HomeTemplate({children} : {children: React.ReactNode}) {
  return (
    <>
      <NavbarHome />
      {children}
    </>
  )
}