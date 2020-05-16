import React, { useEffect } from 'react';
import Loading from '../ui/Loading';
import { Link } from 'react-router-dom';

const CharacterDetails = ({ details, loading, getDetails, match }) => {
  useEffect(() => {
    getDetails(match.params.id);
    // eslint-disable-next-line
  }, []);

  if (loading) return <Loading />;

  const { Avatar, DC, Gender, Name, Server } = details.character || {};

  const Title = details.title;
  const Race = details.race;
  const FC = details.FC;
  const Jobs = details.jobs && details.jobs.slice(0, 18);

  return (
    <div>
      <div className='container text-center'>
        <Link to='/' className='btn btn-danger my-3 text-center'>
          Go Back
        </Link>
      </div>

      <div className='py-4 px-3'>
        <div className='container text-center mb-3 border-bottom'>
          <div className='p-2 mb-2'>
            <img src={Avatar} alt='avatar' className='img-thumbnail' />
            <div>
              <h1>{Name}</h1>
              <h3 className='text-muted'>{Title}</h3>
            </div>
          </div>

          <div>
            <p>
              <span>Data Center:</span> <strong>{DC}</strong>
            </p>
            <p>
              Server: <strong>{Server}</strong>
            </p>

            <p>
              Gender: <strong>{Gender === 1 ? 'Male' : 'Female'}</strong>
            </p>
            <p>
              Race: <strong>{Race}</strong>
            </p>
            <p>
              Free Company:{' '}
              {(FC && <>{FC.Name}</>) || (
                <span className='text-danger font-weight-bold'>none</span>
              )}
            </p>
          </div>
        </div>
        <h2 className='mt-3 mb-4 text-center'>Jobs</h2>
        <div className='row mb-3'>
          {Jobs &&
            Jobs.map((job, i) => {
              return (
                <div
                  className='col-6 col-md-4 text-center mb-4'
                  key={job.Job.ID}
                >
                  <h5
                    className={
                      i < 4
                        ? 'text-info'
                        : i < 7
                        ? 'text-success'
                        : 'text-danger'
                    }
                  >
                    {job.Job.Name.toUpperCase()}
                  </h5>
                  <img
                    src={require(`../../images/icons/class_job_0${job.Job.ID}.svg`)}
                    alt='icon'
                    style={{ height: '100px' }}
                  />
                  <p>
                    Level <strong>{job.Level}</strong>
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
