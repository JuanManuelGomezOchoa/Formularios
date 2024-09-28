import { useState } from "react";
import { Form, Card, Container, Button } from "react-bootstrap";
const App = ()=>{
  const [data, setData] = useState({});

  const onChangeRegister = (e) =>{
    e.preventDefault();
    const nData = data;
    nData[e.target.name] = e.target.value;
    setData(nData);
    console.log(nData)
  }


  const onSubmint = ()=>{
    console.log(data)
  }
  return(
    <>
    {/*Tecnologia y sociedad*/}
    <Container className="mt-3">
    <Card className="mb-5">
      <Card.Title>Tecnología y Sociedad</Card.Title>
      <Card.Body>
      <Form>
        <Form.Label>¿Cómo crees que la inteligencia artificial cambiará el mercado laboral en los próximos 10 años?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res1-1"></Form.Control>

          <Form.Label>¿Qué impacto tiene la tecnología en las relaciones interpersonales?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res1-2"></Form.Control>

          <Form.Label>Explica cómo las redes sociales han transformado el periodismo.</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res1-3"></Form.Control>

          <Form.Label>¿De qué manera los dispositivos móviles han cambiado la manera en que consumimos información?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res1-4"></Form.Control>

          <Form.Label>¿Cómo influye la digitalización en el sector educativo?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res1-5"></Form.Control>

          <Form.Label> ¿Cuál es el rol de la ética en el desarrollo tecnológico?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res1-6"></Form.Control>
      </Form>
      <Button type="submit" variant="success" className="mt-3">Registrar respuesta</Button>
      </Card.Body>
      </Card>
      </Container>

{/*Ciencia y Medio Ambiente*/}
      <Container className="mt-3">
    <Card className="mb-5">
      <Card.Title>Ciencia y Medio Ambiente</Card.Title>
      <Card.Body>
      <Form>
        <Form.Label>¿Cómo crees que la ciencia puede contribuir a la conservación de especies en peligro de extinción?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res2-1"></Form.Control>

          <Form.Label>Explica el papel de la energía renovable en la lucha contra el cambio climático.</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res2-2"></Form.Control>

          <Form.Label>¿De qué manera la agricultura sostenible puede mitigar el impacto ambiental?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res2-3"></Form.Control>

          <Form.Label>¿Qué desafíos enfrenta la humanidad para lograr una economía circular?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res2-4"></Form.Control>

          <Form.Label>¿Qué papel tiene la biotecnología en la sostenibilidad ambiental?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res2-5"></Form.Control>

          <Form.Label>¿Cómo afecta la contaminación plástica a los ecosistemas marinos?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res2-6"></Form.Control>
      </Form>
      <Button type="submit" variant="success" className="mt-3">Registrar respuesta</Button>
      </Card.Body>
      </Card>
      </Container>     


      {/*Historia y Política*/}
      <Container className="mt-3">
    <Card className="mb-5">
      <Card.Title>Historia y Política</Card.Title>
      <Card.Body>
      <Form>
        <Form.Label>¿Cuáles fueron las principales causas de la Primera Guerra Mundial?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res3-1"></Form.Control>

          <Form.Label>Explica el impacto de la Revolución Industrial en la configuración de las sociedades modernas.</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res3-2"></Form.Control>

          <Form.Label>¿Cómo influyó la Guerra Fría en el desarrollo de la tecnología espacial?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res3-3"></Form.Control>

          <Form.Label>¿Qué importancia tuvo el movimiento sufragista en la historia de los derechos humanos?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res3-4"></Form.Control>

          <Form.Label>¿De qué manera los movimientos independentistas influyeron en la configuración de América Latina?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res3-5"></Form.Control>

          <Form.Label>¿Qué efectos tuvo la caída del Muro de Berlín en la política internacional?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res3-6"></Form.Control>
      </Form>
      <Button type="submit" variant="success" className="mt-3">Registrar respuesta</Button>
      </Card.Body>
      </Card>
      </Container>  


{/*Economía y Finanzas*/}
<Container className="mt-3">
    <Card className="mb-5">
      <Card.Title>Economía y Finanzas</Card.Title>
      <Card.Body>
      <Form>
        <Form.Label>¿Cómo afecta la inflación al poder adquisitivo de los ciudadanos?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res4-1"></Form.Control>

          <Form.Label>¿Qué rol desempeñan los bancos centrales en la economía de un país?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res4-2"></Form.Control>

          <Form.Label>¿Cómo influyen las tasas de interés en las decisiones de inversión de las empresas?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res4-3"></Form.Control>

          <Form.Label>¿Qué impacto tiene el comercio internacional en el crecimiento económico?
          </Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res4-4"></Form.Control>

          <Form.Label>¿De qué manera la automatización está transformando el sector manufacturero?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res4-5"></Form.Control>

          <Form.Label>¿Cómo afecta el crecimiento del comercio electrónico a las pequeñas empresas?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res4-5"></Form.Control>
      </Form>
      <Button type="submit" variant="success" className="mt-3">Registrar respuesta</Button>
      </Card.Body>
      </Card>
      </Container>  


{/*Cultura y Sociedad*/}
      <Container className="mt-3">
    <Card className="mb-5">
      <Card.Title>Cultura y Sociedad</Card.Title>
      <Card.Body>
      <Form>
        <Form.Label>¿Cómo influyen las tradiciones culturales en la identidad de un país?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res5-1"></Form.Control>

          <Form.Label>¿Qué impacto tiene la globalización en la homogeneización cultural?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res5-2"></Form.Control>

          <Form.Label>¿Cuál es el papel de la música en la construcción de la identidad juvenil?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res5-3"></Form.Control>

          <Form.Label>¿De qué manera el cine refleja los problemas sociales de una época?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res5-4"></Form.Control>

          <Form.Label>¿Cómo contribuye la literatura a la difusión de ideas filosóficas y políticas?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res5-5"></Form.Control>

          <Form.Label>¿Qué impacto tiene el arte urbano en la transformación de los espacios públicos?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res5-6"></Form.Control>
      </Form>
      <Button type="submit" variant="success" className="mt-3">Registrar respuesta</Button>
      </Card.Body>
      </Card>
      </Container>


      {/*Ciencia y Tecnología*/}
      <Container className="mt-3">
    <Card className="mb-5">
      <Card.Title>Ciencia y Tecnologia</Card.Title>
      <Card.Body>
      <Form>
        <Form.Label>¿Qué importancia tiene la ciencia de datos en la toma de decisiones empresariales?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res6-1"></Form.Control>

          <Form.Label>Explica cómo la inteligencia artificial está revolucionando el campo de la medicina.</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res6-2"></Form.Control>

          <Form.Label>¿Qué rol juegan los avances en materiales en la innovación tecnológica?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res6-3"></Form.Control>

          <Form.Label>¿Cómo influye la computación cuántica en el futuro de la ciberseguridad?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res6-4"></Form.Control>

          <Form.Label>¿Qué impacto tienen los vehículos autónomos en la industria del transporte?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res6-5"></Form.Control>

          <Form.Label>¿Cómo afecta el desarrollo de robots en la automatización industrial?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res6-6"></Form.Control>
      </Form>
      <Button type="submit" variant="success" className="mt-3">Registrar respuesta</Button>
      </Card.Body>
      </Card>
      </Container>

{/*Psicología y Salud Mental*/}
<Container className="mt-3">
    <Card className="mb-5">
      <Card.Title>Psicologia y Salud Mental</Card.Title>
      <Card.Body>
      <Form>
        <Form.Label>¿Cómo influyen las redes sociales en la autoestima de los adolescentes?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res7-1"></Form.Control>

          <Form.Label>Explica la relación entre el estrés y las enfermedades físicas.</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res7-2"></Form.Control>

          <Form.Label>¿Qué factores psicológicos influyen en la toma de decisiones?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res7-3"></Form.Control>

          <Form.Label>¿De qué manera la pandemia afectó la salud mental a nivel global?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res7-4"></Form.Control>

          <Form.Label>¿Cómo se puede mejorar el bienestar emocional en el entorno laboral?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res7-5"></Form.Control>

          <Form.Label>¿Qué impacto tiene la meditación en el control de la ansiedad?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res7-6"></Form.Control>
      </Form>
      <Button type="submit" variant="success" className="mt-3">Registrar respuesta</Button>
      </Card.Body>
      </Card>
      </Container>

      {/*Filosofía y Ética*/}
      <Container className="mt-3">
    <Card className="mb-5">
      <Card.Title>Filosofía y Ética</Card.Title>
      <Card.Body>
      <Form>
        <Form.Label>¿Cuál es el significado de la "libertad" en la filosofía de Jean-Paul Sartre?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res8-1"></Form.Control>

          <Form.Label>¿De qué manera la ética utilitarista influye en la toma de decisiones morales?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res8-2"></Form.Control>

          <Form.Label>Explica el concepto de "justicia" según John Rawls.</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res8-3"></Form.Control>

          <Form.Label>¿Qué impacto tiene el relativismo moral en la sociedad contemporánea?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res8-4"></Form.Control>

          <Form.Label>¿Cómo ha evolucionado la concepción del "bien común" a lo largo de la historia de la filosofía?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res8-5"></Form.Control>

          <Form.Label>¿Qué desafíos plantea la ética en el ámbito de la inteligencia artificial?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res8-6"></Form.Control>
      </Form>
      <Button type="submit" variant="success" className="mt-3">Registrar respuesta</Button>
      </Card.Body>
      </Card>
      </Container>

      {/*Educación y Aprendizaje*/}
      <Container className="mt-3">
    <Card className="mb-5">
      <Card.Title>Educación y Aprendizaje</Card.Title>
      <Card.Body>
      <Form>
        <Form.Label>¿Qué papel juega la motivación intrínseca en el aprendizaje?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res9-1"></Form.Control>

          <Form.Label>¿Cómo pueden las nuevas tecnologías mejorar el proceso de enseñanza-aprendizaje?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res9-2"></Form.Control>

          <Form.Label>¿De qué manera el aprendizaje colaborativo fomenta el desarrollo de habilidades blandas?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res9-3"></Form.Control>

          <Form.Label>¿Cómo influyen los estilos de aprendizaje en la adquisición de conocimientos?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res9-4"></Form.Control>

          <Form.Label>¿Qué importancia tiene el desarrollo del pensamiento crítico en la educación?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res9-5"></Form.Control>

          <Form.Label>¿Cómo puede la educación emocional contribuir a la formación integral de los estudiantes?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res9-6"></Form.Control>
      </Form>
      <Button type="submit" variant="success" className="mt-3">Registrar respuesta</Button>
      </Card.Body>
      </Card>
      </Container>

      {/*Deportes y Salud*/}
      <Container className="mt-3">
    <Card className="mb-5">
      <Card.Title>Deportes y Salud</Card.Title>
      <Card.Body>
      <Form>
        <Form.Label>¿Cómo influye la práctica regular de ejercicio en la salud mental?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res10-1"></Form.Control>

          <Form.Label>¿Qué factores psicológicos afectan el rendimiento de los atletas de alto rendimiento?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res10-2"></Form.Control>

          <Form.Label>¿Cómo ha evolucionado la tecnología en el análisis del rendimiento deportivo?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res10-3"></Form.Control>

          <Form.Label>¿De qué manera la nutrición influye en el rendimiento deportivo?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res10-4"></Form.Control>

          <Form.Label>¿Cómo afecta el dopaje en la ética del deporte profesional?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res10-5"></Form.Control>

          <Form.Label>¿Qué impacto tiene el deporte en la cohesión social y comunitaria?</Form.Label>
          <Form.Control placeholder="Ingresa tu respuesta" onChange={onChangeRegister} name="res10-5"></Form.Control>
      </Form>
      <Button type="submit" variant="success" className="mt-3">Registrar respuesta</Button>
      </Card.Body>
      </Card>
      </Container>
    </>
  )
}
export default App;