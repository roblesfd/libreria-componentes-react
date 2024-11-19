import { useState } from "react";
import { Link } from "react-router-dom";

// Componentes
import Badge from "./atoms/Badge";
import {Button, ButtonSubmit, ButtonTextIcon, ButtonLink, ButtonFloating, ButtonIcon} from './atoms/Buttons';
import Image from "./atoms/Images";
import Toast from "./atoms/Toast";
import Typography from "./atoms/Typography";
import Avatar from "./molecules/Avatar";
import Card from "./molecules/Card";
import SearchBar from "./molecules/SearchBar";
import List from "./molecules/List";
import { InputField } from "./atoms/Inputs";
import {Form, FormFooter, FormHeader} from "./molecules/Form";
import Accordion from "./organisms/Accordion";
import Banner from "./organisms/Banner";
import Drawer from "./organisms/Drawer.jsx";
import Hero from "./organisms/Hero";
import Modal from "./organisms/Modal";
import NavBar from "./organisms/NavBar";
import { SliderHero, SliderItems } from "./organisms/Slider";
import {TableContainer, Table, TableHead, TableHeadCell, TableBody, TableRow, TableCell} from "./organisms/Table";

// Imagenes
import image1 from './assets/image-1.jpg'
import user1Image from './assets/user-1.jpg';
import cardImage1 from './assets/card-1.jpg';
import bgHero1 from './assets/bg-hero-1.jpg';
import bgHero2 from './assets/bg-hero-2.jpg';
import bgHero3 from './assets/bg-hero-3.jpg';
import bgHero4 from './assets/bg-hero-4.jpg';



import { IoDocument } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { RiShoppingBasketFill } from "react-icons/ri";

// import image2Sm from './assets/image-2-1.jpg'
// import image3Md from './assets/image-2-2.jpg'
// import image3Lg from './assets/image-2-3.jpg'


function App() {
  //Estado para toast
  const [isToast, setIsToast] = useState(false);
  const cardLinks = [
  <a key={1} href="#">footerlink1</a>,   
  <a key={2} href="#">footerlink2</a>
  ]

  const searchBarSuggestions = ['JavaScript', 'React', 'Tailwind CSS', 'Node.js', 'HTML', 'CSS'];

  const listItems = ['Este es un Item 1', 'Item 2', 'Item 3', 'Item 4'];
  const listItems2 = [
    {icon:<IoDocument />, text:'Este es un Item 1', button:           
    <ButtonIcon
      bgColor="transparent"
      fontSize="xl"
      icon={<FaTrash />}
    />},
    {icon:<IoDocument />, text:'Este es un Item 2'},
    {icon:<IoDocument />, text:'Este es un Item 3'},
    {icon:<IoDocument />, text:'Este es un Item 4'},
    {icon:<IoDocument />, text:'Este es un Item 5'},
    ];
  const listAccordion = [
    {title: "Titulo 1", content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae neque praesentium assumenda inventore corrupti recusandae, mollitia ea cum incidunt fuga exercitationem perferendis accusantium quaerat, impedit, veniam fugiat aliquam atque adipisci aperiam expedita. Dolor veritatis delectus a explicabo impedit iste officiis."},
    {title: "Titulo 2", content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae neque praesentium assumenda inventore corrupti recusandae, mollitia ea cum incidunt fuga exercitationem perferendis accusantium quaerat, impedit, veniam fugiat aliquam atque adipisci aperiam expedita. Dolor veritatis delectus a explicabo impedit iste officiis."},
    {title: "Titulo 3", content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae neque praesentium assumenda inventore corrupti recusandae, mollitia ea cum incidunt fuga exercitationem perferendis accusantium quaerat, impedit, veniam fugiat aliquam atque adipisci aperiam expedita. Dolor veritatis delectus a explicabo impedit iste officiis."},
    {title: "Titulo 4", content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae neque praesentium assumenda inventore corrupti recusandae, mollitia ea cum incidunt fuga exercitationem perferendis accusantium quaerat, impedit, veniam fugiat aliquam atque adipisci aperiam expedita. Dolor veritatis delectus a explicabo impedit iste officiis."},
    {title: "Titulo 5", content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae neque praesentium assumenda inventore corrupti recusandae, mollitia ea cum incidunt fuga exercitationem perferendis accusantium quaerat, impedit, veniam fugiat aliquam atque adipisci aperiam expedita. Dolor veritatis delectus a explicabo impedit iste officiis."},
  ];

  const drawerContent = 
  <div>
    <h2 className="subtitle-1">Side Drawer Content</h2>
    <p>This is the content of the side drawer.</p>
  </div>

  const modalContent = 
    <div>
      <h2 className="text-xl font-bold mb-4">Titulo del Modal</h2>
      <p>Este es el contenido del modal</p>
    </div>

  const searchBarComponent = 
    <SearchBar onSearch={()=>console.log("Buscando...")} 
               suggestions={searchBarSuggestions} 
    />

  const heroData = [
    {
      title: "Hero 1",
      subtitle: "Descripcion para Hero 1",
      image: bgHero2,
      button: (
        <Button 
          bgColor="primary-500" 
          color="white" 
          text="saber mas" 
        />
      ),
    },
    {
      title: "Hero 2",
      subtitle: "Descripcion para Hero 2",
      image: bgHero3,
      button: (
        <Button 
          bgColor="primary-500" 
          color="white" 
          text="saber mas" 
        />
      ),
    },
    {
      title: "Hero 3",
      subtitle: "Descripcion para Hero 3",
      image: bgHero4,
      button: (
        <Button 
          bgColor="primary-500" 
          color="white" 
          text="saber mas" 
        />
      ),
    },
  ];

  const input1 =<InputField 
                  type="text"  
                  name="nombre"
                  placeholder="Ingresa tu nombre..."
                  value=""
                  onChange={()=>console.log("Input text")}
                  disabled={false}
                />;
  // console.log(input1.type.name);



  return (
    <div className="p-10 md:p-12">
      <h1 className="title-1 mb-10 text-center ">Libreria Componentes Tailwind + React</h1>
      {/***********  ATOMS  ************/}
      {/* BADGE */}
      <div className="space-sections">
        <h2 className="title-2 underline decoration-primary-700 decoration-4">Badges</h2>
        <div className=" mt-4 flex-wrap mt-4">
          <Badge text="sugerencias" bgColor="bg-primary-500" textColor="white" size="sm" />
          <Badge text="sugerencias" bgColor="bg-secondary-500" textColor="white" size="sm" />
          <Badge text="sugerencias" bgColor="bg-accent1" textColor="white" size="sm" />
          <Badge text="sugerencias" bgColor="bg-accent2" textColor="white" size="sm" />
          <Badge text="sugerencias" bgColor="bg-info" textColor="white" size="md" />
          <Badge text="sugerencias" bgColor="bg-success" textColor="white" size="xl" />
          <Badge text="sugerencias" bgColor="bg-warning" textColor="white" size="2xl" />
          <Badge text="sugerencias" bgColor="bg-danger" textColor="white" size="3xl" />
        </div>
      </div>
      {/* BUTTONS */}
      <div className="space-sections">
        <h2 className="title-2 underline decoration-primary-700 decoration-4">Buttons</h2>
        <div className="flex gap-3 mt-4">
            <Button bgColor="primary-500" color="white" text="configurar" />
            <ButtonTextIcon
              bgColor="primary-500"
              padding="2"
              fontSize="text-base"
              border="border-2"
              color="white"
              text="Favoritos"
              icon="⭐️"
              onClick={() => console.log('Botón clicado')}
            />
            <ButtonLink
              color="primary-500"
              padding="2"
              fontSize="text-base"
              text="Haz clic"
              href="#"
              onClick={() => console.log('Enlace clicado')}
            />
            {/* <ButtonFloating
              bgColor="primary-500"
              fontSize="xl"
              text="+"
              color="white"
              widthHeight="10"
              onClick={() => console.log('Botón flotante clicado')}
            /> */}

            <ButtonIcon
              bgColor="primary-500"
              color="white"
              fontSize="xl"
              icon="+"
              widthHeight="10"
              onClick={() => console.log('Botón de icono clicado')}
            />
        </div>
      </div>
      {/* IMAGEN */}
      <div className="space-sections">
        <h2 className="title-2 underline decoration-primary-700 decoration-4">Imagenes</h2>
        <div className="flex gap-3 mt-4">
            <Image url={image1} textAlt="image-1" />
        </div>
      </div>
      {/* TOAST */}
      <div className="space-sections">
        <h2 className="title-2 underline decoration-primary-700 decoration-4">Toast</h2>
        <div className="flex gap-3 mt-4">
          <Toast message="Cambios guardados" textButton={"Toast"} toastBgColor="success" isOpen={!isToast} buttonBgColor="primary-500" />
        </div>
      </div>
      {/* TIPOGRAFIAS */}
      <div className="space-sections">
        <h2 className="title-2 underline decoration-primary-700 decoration-4 mb-4">Tipografias</h2>
        <Typography />
      </div>
      {/* ESPACIADOS */}
      <div className="space-sections">
        <h2 className="title-2 underline decoration-primary-700 decoration-4">Espaciados</h2>
        <div className="space-sections mt-5">
          <div className="w-100 bg-primary-200 h-20">
            <div className="flex justify-center items-center ">
              <div>espacios entre secciones</div>
            </div>
          </div>
        </div>
        <div className="space-sections">
          <div className="w-100 bg-primary-200 h-20">
            <div className="flex justify-center items-center ">
              <div>espacios entre secciones</div>
            </div>
          </div>
        </div>
      </div>
      {/* AVATAR */}
      <div className="space-sections">
        <h2 className="title-2 underline decoration-primary-700 decoration-4">Avatar</h2>
        <div  className="flex flex-row gap-7 mt-5">
          <Avatar 
            src={user1Image}
            size="large" 
            shape="rounded"
            status="offline"
            direction="row"
            username="Miguel Gonzalez"
            occupation="Consultor"
            links="links"  
          />
          <Avatar 
            src={user1Image}
            size="large" 
            shape="rounded"
            status="online"
            direction="col"
            username="Miguel Gonzalez"
            occupation="Consultor"
            links="links"  
          />
        </div>
      </div>
      {/* CARD */}
      <div className="space-sections">
        <h2 className="title-2 underline decoration-primary-700 decoration-4">Cards</h2>
        <div className="flex gap-8 mt-4">
          <Card
            variant="basic" 
            header="header" 
            title="title"  
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo aliquam quod vitae quaerat ex soluta!" 
            footerContent={cardLinks}
            imgUrl={cardImage1}
          />
          <Card
            variant="image" 
            header="header" 
            title="title"  
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo aliquam quod vitae quaerat ex soluta!" 
            footerContent={cardLinks}
            imgUrl={cardImage1}
          />
        </div>
      </div>
      {/* SEARCHBAR */}
      <div className="space-sections">
        <h2 className="title-2 underline decoration-primary-700 decoration-4">Searchbar</h2>
        <div className="flex flex-row gap-7 mt-4">
            {searchBarComponent}
        </div>
      </div>
      {/* LIST */}
      <div className="space-sections">
        <h2 className="title-2 underline decoration-primary-700 decoration-4">List</h2>
        <div className="flex flex-row gap-7 mt-4">
          <List items={listItems2} bgColor="primary-100" textColor="inherit" />
        </div>
      </div>
      {/* INPUTS */}
      <div className="space-sections">
        <h2 className="title-2 underline decoration-primary-700 decoration-4 mb-5">Inputs</h2>
        <InputField 
          type="text"  
          name="nombre"
          placeholder="Ingresa tu nombre..."
          value=""
          onChange={()=>console.log("Input text")}
          disabled={false}
        />
      </div>
      {/* FORMS */}
      <div className="space-sections">
        <h2 className="title-2 underline decoration-primary-700 decoration-4 mb-5">Forms</h2>
        <Form colNumbers={2}>
            <FormHeader>
              <h2 className="text-xl">Encabezado del Form</h2>
            </FormHeader>
            <InputField
              type="text"
              name="firstName"
              placeholder="Nombre"
              disabled={false}
              size="medium"
              borderColor="blue-500"
            />
            <InputField
              type="text"
              name="lastName"
              placeholder="Apellido"
              disabled={false}
              size="medium"
              borderColor="blue-500"
            />
            <InputField
              type="email"
              name="email"
              placeholder="Correo electrónico"
              disabled={false}
              size="medium"
              borderColor="blue-500"
            />
            <InputField
              type="password"
              name="password"
              placeholder="Password"
              disabled={false}
              size="medium"
              borderColor="blue-500"
            />
            <InputField
              type="text"
              name="contact"
              placeholder="Teléfono"
              disabled={false}
              size="medium"
              borderColor="blue-500"
            />
            <InputField
              type="text"
              name="address"
              placeholder="Dirección"
              disabled={false}
              size="medium"
              borderColor="blue-500"
            />
            <FormFooter>
              <div className="mt-3 mb-4">
                <a href="#" >¿Olvidaste tu contraseña?</a>
              </div>
              <div className="flex flex-row justify-end  gap-5">
                <ButtonSubmit bgColor="primary-500" color="white" text="Enviar" />
                <Button bgColor="accent1" color="white" text="Cancelar" />
              </div>
            </FormFooter>
        </Form>
      </div>
      {/* ACCORDION */}
      <div className="space-sections">
        <h2 className="title-2 underline decoration-primary-700 decoration-4 mb-5">Acordeon</h2>
        {
          listAccordion.map((item,index) => <Accordion key={index} title={item.title} content={item.content} />)
        }
      </div>
      {/* BANNER */}
      <div className="space-sections">
        <h2 className="title-2 underline decoration-primary-700 decoration-4 mb-5">BANNER</h2>
        <Banner title="Aprovecha las ofertas" 
                subtitle="Tienes hasta el 30 de Noviembre" 
                bgColor="primary-500" 
                textColor="white"
                button={<Button bgColor="accent1" color="white" text="Comprar" />} />
      </div>
      {/* DRAWER */}
      <div className="space-sections">
        <Drawer icon={<RiShoppingBasketFill />} drawerContent={drawerContent} />
      </div>
      {/* HERO */}
      <div className="space-sections">
        <h2 className="title-2 underline decoration-primary-700 decoration-4 mb-5">Hero</h2>
        <Hero 
          button={<Button bgColor="accent1" color="white" text="Comprar" />} 
          title="Titulo del Hero"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, placeat nulla eum doloribus quo non."  
          img={bgHero1}
        />
      </div>
      {/* MODAL */}
      <div className="space-sections">
        <h2 className="title-2 underline decoration-primary-700 decoration-4 mb-5">Modal</h2>
        <Modal  buttonText="Abrir modal" modalContent={modalContent} includeCloseButton={true} />
      </div>
      {/* NAVBAR */}
      <div className="space-sections">
        <h2 className="title-2 underline decoration-primary-700 decoration-4 mb-5">Navbar</h2>
        <NavBar title="Mi Sitio" bgColor="secondary-500" searchBar={searchBarComponent} >
            <a href="#" className="text-white hover:text-gray-300">
              Inicio
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Servicios
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Nosotros
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Contacto
            </a>
        </NavBar>
      </div>
      {/* SLIDERS */}
      {/* <div className="space-sections">
        <h2 className="title-2 underline decoration-primary-700 decoration-4">Sliders</h2>
        <SliderHero heroList={heroData} />
      </div> */}
      {/* TABLE */}
      <div className="space-sections">
        <h2 className="title-2 underline decoration-primary-700 decoration-4">Tablas</h2>
        <TableContainer >
          <Table bgColor="primary-700" bordered={false}>
            <TableHead>
              <TableRow>
                <TableHeadCell bordered>ID</TableHeadCell>
                <TableHeadCell bordered>Nombre</TableHeadCell>
                <TableHeadCell bordered>Correo Electronico</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell bordered>1</TableCell>
                <TableCell bordered>Usuario 1</TableCell>
                <TableCell bordered>usuario1@example.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell bordered>2</TableCell>
                <TableCell bordered>Usuario 2</TableCell>
                <TableCell bordered>usuario2@example.com</TableCell>   
              </TableRow>
              <TableRow>
                <TableCell bordered>3</TableCell>
                <TableCell bordered>Usuario 3</TableCell>
                <TableCell bordered>usuario3@example.com</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default App
