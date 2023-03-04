'use client';

import Vimeo from '@u-wave/react-vimeo';

export function CourseDetails(): JSX.Element {
  return (
    <div className="container p-2">
      <div className="row">
        <div className="col">
          <h3>Web Development Masterclass & Certifications</h3>
          <p>
            HTML | CSS | JavaScript | Web programming | Web development |
            Front-end | Responsive | JQuery
          </p>
          <p>35,757 students</p>
          <p>Created by Haider Malik</p>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <Vimeo video="785538329" />
              <h2>$15</h2>
              <button className="btn btn-primary" type="button">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
