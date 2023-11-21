import React, { useState } from 'react'

const TripleMatrix = () => {
  const matrix1 = [[], [], []];
  const matrix2 = [[], [], []];
  const result = [[], [], []];
  const [check, setCheck] = useState(false);

  const handleElement1 = (e) => {
    matrix1[0][0] = e.target.value;
  }

  const handleElement2 = (e) => {
    matrix1[0][1] = e.target.value;
  }

  const handleElement3 = (e) => {
    matrix1[0][2] = e.target.value;
  }

  const handleElement4 = (e) => {
    matrix1[1][0] = e.target.value;
  }

  const handleElement5 = (e) => {
    matrix1[1][1] = e.target.value;
  }

  const handleElement6 = (e) => {
    matrix1[1][2] = e.target.value;
  }

  const handleElement7 = (e) => {
    matrix1[2][0] = e.target.value;
  }

  const handleElement8 = (e) => {
    matrix1[2][1] = e.target.value;
  }

  const handleElement9 = (e) => {
    matrix1[2][2] = e.target.value;
  }

  const handleMatElement1 = (e) => {
    matrix2[0][0] = e.target.value;
  }

  const handleMatElement2 = (e) => {
    matrix2[0][1] = e.target.value;
  }

  const handleMatElement3 = (e) => {
    matrix2[0][2] = e.target.value;
  }

  const handleMatElement4 = (e) => {
    matrix2[1][0] = e.target.value;
  }

  const handleMatElement5 = (e) => {
    matrix2[1][1] = e.target.value;
  }

  const handleMatElement6 = (e) => {
    matrix2[1][2] = e.target.value;
  }

  const handleMatElement7 = (e) => {
    matrix2[2][0] = e.target.value;
  } 

  const handleMatElement8 = (e) => {
    matrix2[2][1] = e.target.value;
  }

  const handleMatElement9 = (e) => {
    matrix2[2][2] = e.target.value;
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

                        <label htmlFor="element1">Enter Fifth Element</label>
                        <input type="number" name='e4' onChange={handleElement5} />
                        <br />

                        <label htmlFor="element1">Enter Sixth Element</label>
                        <input type="number" name='e4' onChange={handleElement6} />
                        <br />

                        <label htmlFor="element1">Enter Seventh Element</label>
                        <input type="number" name='e4' onChange={handleElement7} />
                        <br />

                        <label htmlFor="element1">Enter Eight Element</label>
                        <input type="number" name='e4' onChange={handleElement8} />
                        <br />

                        <label htmlFor="element1">Enter Nineth Element</label>
                        <input type="number" name='e4' onChange={handleElement9} />
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

                        <label htmlFor="element1">Enter Fifth Element</label>
                        <input type="number" name='e4' onChange={handleMatElement5} />
                        <br />

                        <label htmlFor="element1">Enter Sixth Element</label>
                        <input type="number" name='e4' onChange={handleMatElement6} />
                        <br />

                        <label htmlFor="element1">Enter Seventh Element</label>
                        <input type="number" name='e4' onChange={handleMatElement7} />
                        <br />

                        <label htmlFor="element1">Enter Eighth Element</label>
                        <input type="number" name='e4' onChange={handleMatElement8} />
                        <br />

                        <label htmlFor="element1">Enter Nineth Element</label>
                        <input type="number" name='e4' onChange={handleMatElement9} />
                        <br />

                    </div>
                </section>

                <button onClick={handleSubmit}>Calculate</button>

                <section className='sec3'>
                    {check ? <>
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
                    }
                </section>

            </div>
    </>
  )
}

export default TripleMatrix