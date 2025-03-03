
import { useState } from 'react'
import './Bai01.css'

function Bai01() {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    const [phepTinh, setPhepTinh] = useState('')
    const [result, setReuslt] = useState(0)


    const handleChangePT = (e) => {
        setPhepTinh(e.target.value)
    }

    const handleClick = () => {
        if (phepTinh.length > 0) {
            if (phepTinh === 'cong') setReuslt(Number(a) + Number(b))
            else if (phepTinh === 'tru') setReuslt(Number(a) - Number(b))
            else if (phepTinh === 'nhan') setReuslt(Number(a) * Number(b))
            else if (phepTinh === 'chia') setReuslt(Number(a) / Number(b))
        }
        else {
            alert('Vui long chon phep tinh!')
        }
    }

    return (
        <>
            <div className='input-box'>
                <input className='input-a' type="number" value={a} onChange={(e) => setA(e.target.value)} />
                <input className='input-b' type="number" value={b} onChange={(e) => setB(e.target.value)} />
            </div>
            <div className='radio-box'>
                <input type="radio" name='pt' value={'cong'} onChange={handleChangePT} />Cong
                <input type="radio" name='pt' value={'tru'} onChange={handleChangePT} />Tru
                <input type="radio" name='pt' value={'nhan'} onChange={handleChangePT} />Nhan
                <input type="radio" name='pt' value={'chia'} onChange={handleChangePT} />Chia
            </div>
            <button className='btn-click' onClick={handleClick}>Calculate</button>
            {result !== 0 ? (
                <div>Result: {result}</div>
            ) : null}
        </>
    )
}

export default Bai01
