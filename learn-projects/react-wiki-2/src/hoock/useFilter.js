import { useSelector } from "react-redux";
import { flatten } from 'lodash';

const useFilter = () => {
  const search = useSelector((state) => state.search.values);
  const results = useSelector((state) => state.results.values);
  const getReportingIds = flatten(results.map((component) => component));
  const myFilt = getReportingIds.filter((e) => {
   return e.strMeal.toLowerCase().includes(search);
  })
  /*
  const filtStatus = getReportingIds.filter((e) => {
    return e.strCategory==='Beef'
   })*/
  return { myFilt} 
}

export default useFilter;