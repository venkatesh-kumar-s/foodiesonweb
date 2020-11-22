import React, { useState } from 'react'

function Saved() {
    const savedPosts=[
        {
            icon:"",
            source:"",
            title:"",
            desc:"",
        },
    ]

    const [saved, setSaved]=useState(savedPosts);

    const handleChange=(index,event)=>{
        const values=[...saved];
        values[index][event.target.name]=event.target.value;
        setSaved(values);
      }
    return (
        <div>
            
        </div>
    )
}

export default Saved;
