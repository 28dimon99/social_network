import React,{useState} from "react";
import s from "../Pagination/Pagination.module.css"
import cn from "classnames"


const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize=10}) => {

  //общее количество страниц делим на размер страницы
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++){
    pages.push(i);
  }
  //Дробим на порции
  //portionSize задаем значение из вне из пропсов
  //Общее количество страниц дели на размер порции
  let portionCount = Math.ceil(pagesCount / portionSize);
  //создаем хук для локального state и граним в нем первую порцию
  let [portionNumber, setPortionNumber] = useState(1);
  //определяем левую границу порции
  let leftPortionPageNumber = (portionNumber - 1) *  portionSize +1;
  //определяем правую границу порции
  let rigthPortionPageNumber = portionNumber * portionSize;
  return(
      <div className={cn(s.paginator, {[s.selectedPage]:true})}>
     {/*   //показывай кнопку влево если номер порции больше 1*/}
        {portionNumber > 1 &&
        <button onClick={()=>{setPortionNumber(portionNumber-1)}}>PREV</button>}
        {pages
         /* //используем фильтр для отрисовки тех страниц которые больше левой границы порции и меньше правой границы порции
          //отривовуются только те кнопки которые входят в диапазон порции*/
          .filter(p => p >= leftPortionPageNumber && p <= rigthPortionPageNumber)
          .map((p)=> {
          return <span className={cn ({[s.selectedPage]: currentPage === p}, s.pageNumber)}
                       key={p}
                       onClick={(e) => {
                         onPageChanged(p)
                       }}>{p}</span>
        })}
        {portionCount > portionNumber &&
          //приклике на стрелку устанавливавем номер порции на 1 больше
        <button onClick={()=>{setPortionNumber(portionNumber +1)}}>NEXT</button>}
      </div>
    )

};
export default Paginator