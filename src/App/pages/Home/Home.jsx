import React, { useEffect } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./home.style.css";
import image from "../../images/vector_smart_object.png";
import { Loader } from "../../components/Loader";

export default function Home(props) {
  // const classNamees = uses();

  useEffect(() => {
    const { getData } = props;
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { data, loading } = props;

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Header />
      <div className="row">
        <div className="side">
          {data &&
            data.map((item) => (
              <div className="box" key={item.id}>
                <p>{item.name}</p>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
                <button>Try for free</button>
                <button className="demo_btn">Watch demo</button>
              </div>
            ))}
        </div>
        <div className="main">
          <img src={image} alt="vector" />
        </div>
      </div>
	  <Footer />
    </div>
  );
}

{
  /* {(loading ) ? (
				<Loader />
			) : (
				<>
				<Header />
					  <div classNameName="row">
 					 <div  ={{paddingTop: '100px', paddingLeft: '100px'}}>
					{
					data && data.map((item) => (
					<div key={item.id}>
					<IconButton>
           			 <CheckCircleOutlineRoundedIcon /> <h6>{item.name}</h6>
           			 </IconButton>
					<h1>{item.title}</h1>
					<h2 ={{color: 'grey'}}>{item.body}</h2>
					</div>
					))
					}
					<div>
	  			<TryForFreeBtn text='Try for free' />
	  			<Button color="primary"  ={{textTransform: 'none'}}>Watch demo video</Button>
					</div>			
  					</div>
 					 <div >
  					<img src={vector_image} alt="vector_image" />
 				 </div>
				</div>
	 			</>
			)
	  	} */
}
