import useSWR from "swr";
import styles from "../../../../styles/styleCategory.module.scss";
import courseServices from "../../../Services/courseService";
import SlideComponent from "../../common/slideComponent";
import PageSpinner from "../../common//spinner";

const FavoriteCategory = function () {
  const { data, error } = useSWR("/favorites", courseServices.getFavCourses);

  if (error) return error;
  if (!data) {
    return <PageSpinner/>
  }
  
  return (
  <>
    <p className={styles.titleCategory}>MINHA LISTA</p>
    {data.data.courses.length >= 1 ? (
      <SlideComponent course={data.data.courses} />
    ) : (
      <p className="h5 text-center pt-3">
        <strong>Você não tem nenhum curso na lista</strong>
      </p>
)}
  </>
  );
};

export default FavoriteCategory;