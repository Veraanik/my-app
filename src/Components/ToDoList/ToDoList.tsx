import React, {useState} from 'react';
import ToDoListElement from "./ToDoListElement";

type ListElement = {
    name: string;
    desk: string;
}
const ToDoList = () => {
    const [name, setName] = useState('');
    const [desk, setDesk] = useState('');

    const [list, setList] = useState<ListElement[]>([])

    const ElementInList = () => {
        setList([...list,
            {name: name, desk: desk}])
        setName('');
        setDesk('');
    }

    const OnDeleteClick=(index:number)=>
    {
        const fitlered= list
            .filter((el,i)=>i!==index);
        setList(fitlered);
    }
    console.log(list)
    return (
        <div>
            <div>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="text"
                    value={desk}
                    onChange={(e) => setDesk(e.target.value)}
                />
            </div>
            <div>
                <button onClick={() => ElementInList()}>
                    Добавить в список
                </button>
            </div>
            <div>
                {
                    list.map((el, i) =>
                    <ToDoListElement
                        OnDeleteClick = { () => OnDeleteClick(i) }
                        name = {el.name}
                        desk = {el.desk}
                        key = {i}/>)
                }
            </div>

        </div>
    );
};

export default ToDoList;