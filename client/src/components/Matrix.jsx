import React, { useState } from 'react'


const Matrix = () => {
    const matrix1 = [[], []];
    const matrix2 = [[], []];
    const result = [[], []];
    const[check, setCheck] = useState(false);

    const handleElement1 = (e) => {
        matrix1[0][0] = e.target.value;
    }

    const handleElement2 = (e) => {
        matrix1[0][1] = e.target.value;
    }

    const handleElement3 = (e) => {
        matrix1[1][0] = e.target.value;
    }

    const handleElement4 = (e) => {
        matrix1[1][1] = e.target.value;
    }

    const handleMatElement1 = (e) => {
        matrix2[0][0] = e.target.value;
    }

    const handleMatElement2 = (e) => {
        matrix2[0][1] = e.target.value;
    }

    const handleMatElement3 = (e) => {
        matrix2[1][0] = e.target.value;
    }

    const handleMatElement4 = (e) => {
        matrix2[1][1] = e.target.value;
    }

    const handleSubmit = ()=>{
        for(var i=0; i < matrix1.length; i++){
            for (var j = 0; j < matrix1.length; j++) {
               for(var k =0; k < matrix1.length; k++){
                    result[i][j] = matrix1[i][k] * matrix2[k][j];
               }
            }
        }

        for(var i=0; i < matrix1.length; i++){
            for (var j = 0; j < matrix1.length; j++) {
                console.log(result[i][j])
                return(
                    <>
                         <div>{result[i][j]}</div>
                    </>
                )
                
            }
        }
        setCheck(true);
        
    }

    return (
        <>
            <div>
                <section className='sec1'>
                    <div className='firstMat'>
                        <label htmlFor="element1">Enter First Element</label>
                        <input type="number" name='e1' onChange={handleElement1} />
                        <br />

                        <label htmlFor="element1">Enter Second Element</label>
                        <input type="number" name='e2' onChange={handleElement2} />
                        <br />

                        <label htmlFor="element1">Enter Third Element</label>
                        <input type="number" name='e3' onChange={handleElement3} />
                        <br />

                        <label htmlFor="element1">Enter Fourth Element</label>
                        <input type="number" name='e4' onChange={handleElement4} />
                        <br />

                    </div>
                </section>
                <section className='sec2'>
                    <div className='secondMat'>
                        <label htmlFor="element1">Enter First Element</label>
                        <input type="number" name='e1' onChange={handleMatElement1} />
                        <br />

                        <label htmlFor="element1">Enter Second Element</label>
                        <input type="number" name='e2' onChange={handleMatElement2} />
                        <br />

                        <label htmlFor="element1">Enter Third Element</label>
                        <input type="number" name='e3' onChange={handleMatElement3} />
                        <br />

                        <label htmlFor="element1">Enter Fourth Element</label>
                        <input type="number" name='e4' onChange={handleMatElement4} />
                        <br />

                    </div>
                </section>

                <button onClick={handleSubmit}>Calculate</button>

                <section className='sec3'>
                    {/* {check ? <>
                        {result.map((row, i)=>{
                            return(
                                <>
                                    {result.map((col, j)=>{
                                        return(
                                            <>
                                                {result[row][col]}
                                            </>
                                        )
                                    })}
                                </>
                            )
                            
                        })}
                    </> : <></>
                    } */}
                </section>

            </div>
        </>
    )
}

export default Matrix