import { useState } from "react";

const Button = () => {

    const [count, updateCount] = useState(0)

    return (
        <button onClick={() => {updateCount(count+1)}}>
            Update Count {count}
        </button>
    )

}

export default Button;