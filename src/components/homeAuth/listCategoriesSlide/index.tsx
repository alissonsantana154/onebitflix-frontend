import useSWR from "swr";
import styles from "../../../../styles/styleCategory.module.scss";
import categoriesService from "../../../Services/categoriesService";
import SlideComponent from "../../common/slideComponent";

interface props {
  categoryId: number;
  categoryName: string;
}

const ListCategoriesSlide = function ({ categoryId, categoryName }: props) {
  const { data, error } = useSWR(
    `/categoriesCourses/${categoryId}`, 
    () => categoriesService.getCourses(categoryId)
  );

  if (error) return error;
  if (!data)
    return (
      <>
        <p>Loading...</p>
      </>
    );

  return (
    <>
      <p className={styles.titleCategory}>{categoryName}</p>
      <SlideComponent course={data.data.courses}/>
    </>
  );
};

export default ListCategoriesSlide;