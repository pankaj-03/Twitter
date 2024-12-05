import React, { useCallback } from 'react'
import { useState } from 'react'
import useLoginModel from '@/hooks/useLoginModel'

function LoginModel() {

    const loginModel = useLoginModel();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = useCallback(async () => {
        try {

        } catch (error) {
                 console.log(error);
        }
    }, []);


    return (
        <div>

        </div>
    )
}

export default LoginModel
