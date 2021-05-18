import { useState } from "react";

const useFormState = () => {

    // form states

    const [department, setDepartment] = useState('');

    const handleDepartment = (event) => {
        setDepartment(event.target.value);
    };

    // This is extremely bad practice but right now needed a quick solution

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [admin, setAdmin] = useState(false);
    const [picture, setPicture] = useState('');
    const [recovery, setRecovery] = useState('')
    const [workSettings, setWorkSettings] = useState('');
    const [schedule, setSchedule] = useState('');

    return {
        department,
        firstName,
        lastName,
        username,
        password,
        confirmPassword,
        admin,
        picture,
        recovery,
        workSettings,
        schedule,
        setPassword,
        setFirstName,
        setLastname,
        setUsername,
        setPassword,
        setConfirmPassword,
        setAdmin,
        setPicture,
        setRecovery,
        setWorkSettings,
        setSchedule,
        handleDepartment,
        setDepartment

    }

}

export default useFormState;