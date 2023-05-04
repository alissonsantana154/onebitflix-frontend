import { Container, Button } from "reactstrap";
import { CourseType } from "../../../services/courseService";
import styles from "./styles.module.scss";
import SlideComponent from "../../common/slideComponent";
import Link from "next/link";

interface props {
  newestCourses: CourseType[];
}
const SlideSection = function ({ newestCourses }: props) {
  return(
    <>
      <Container>
        <p className={styles.sectionTitle}>AULAS JÁ DISPONIVEIS</p>
        <SlideComponent course={newestCourses}/>
        <Link href="/register">
          <Button outline color="light" className={styles.slideSectionBtn}>
            Se cadastre para acessar!
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default SlideSection;