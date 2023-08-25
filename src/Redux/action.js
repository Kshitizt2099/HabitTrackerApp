export const adding="ADD"
export const sub="SUB"
export function add(data)
{
    return {
        type:adding,
        data
    }
}
export function subtract(data)
{
    return {
        type:sub,
        data
    }
}

export function ADDDATA(name)
{
    return {
        type:"ADDDATA",
        name
    }
}
export function DELDATA(element)
{
    return {
        type:"DELDATA",
    
        element
    }
}
export function UPDATESTATUS(id,dayid)
{
    return {
        type:"UPDATESTATUS",
    
        id,
        dayid
    }
}
export function REMOVESTATUS(id,dayid)
{
    return {
        type:"REMOVESTATUS",
    
        id,
        dayid
    }
}