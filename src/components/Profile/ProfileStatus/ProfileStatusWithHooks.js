import React, {useState, useEffect} from "react"

const ProfileStatusWithHooks = (props) => {

  //useState возвращает нам массив из двух элементов 1 само значение 2 изменить значение 1
  let [editMode, setEditMode] = useState(false);
  //передаем status
  let [status, setStatus] = useState(props.status);
  //Когда компонента отрисовалась мы можем вызывать эффекты
  //Cинхронизируем status впичатываем символы
  useEffect(() =>{
    setStatus(props.status)
  }, [props.status]);

  const activateEditMode = () =>{
    //асинхронный запрос
    setEditMode(true)
    };
  const deactivateEditMode = () => {
    //асинхронный запрос
    setEditMode(false);
    //когда статус изменился необходимо сообщить бизнесу
    props.updateStatus(status)
  };
  const onStatusChange = (e) =>{
    setStatus(e.currentTarget.value)
  }

  return (
    <div>
     {/* Если у нас не editMode показываем div ниже*/}
      {!editMode &&
      <div>
        <b>Status:</b><span onDoubleClick={activateEditMode}>{props.status || "---------" }</span>
      </div>
      }
      {/*Если у нас editMode показываем div ниже*/}
      {editMode &&
      <div>
        <input onChange={onStatusChange} autoFocus={true}
               onBlur={deactivateEditMode}
               value={status}/>
      </div>
      }
    </div>
  )
};

export default ProfileStatusWithHooks

