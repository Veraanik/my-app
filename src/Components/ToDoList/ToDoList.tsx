import React, {useState} from 'react';

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
                    list.map((el, i) => <div>

                            <div>
                                {el.name}
                            </div>

                        <div>
                                {el.desk}
                            </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default ToDoList;