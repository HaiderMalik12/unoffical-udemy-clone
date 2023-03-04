import { Accordion } from './Accordion';

export function Curriculum() {
  return (
    <>
      <div className="container p-3">
        <h5>Course Content</h5>
        <div className="row">
          <div className="col">
            <Accordion />
          </div>
        </div>
      </div>
    </>
  );
}
