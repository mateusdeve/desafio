import React from 'react'

export const GlobalContext = React.createContext();

export const GlobalStorage =({children}) => {
    const [lembretes, setLembretes] = React.useState([]);
    React.useEffect(()=>{
        const getLembretes = window.localStorage.getItem("lembretes");
        getLembretes && setLembretes(JSON.parse(getLembretes));
        
    },[])

    const criarLembrete = (props) =>{
        const allLembretes = [ ...lembretes, { ...props, id: (lembretes.length + 1) } ];
        window.localStorage.setItem("lembretes", JSON.stringify(allLembretes))
        setLembretes(allLembretes);
    }

    const editarLembrete = (props, id) => {
        const allLembretes = lembretes.map((lembrete) => {
            return lembrete.id === id ? { ...props, id } : lembrete
        })
        window.localStorage.setItem("lembretes", JSON.stringify(allLembretes))
        setLembretes(allLembretes);
    }


return (
    <GlobalContext.Provider value={{criarLembrete,editarLembrete,lembretes}}>
        {children}
    </GlobalContext.Provider>
)

}