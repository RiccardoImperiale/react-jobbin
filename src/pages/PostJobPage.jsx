import '../assets/css/post_job.css'

export default function PostJobPage() {
    return (
        <div className="container">
            <h2 className="title">Post Job</h2>
            <div className="post_job">
                <form action="">
                    <h3>Job Info</h3>

                    {/* JOB TYPE  */}
                    <div className="input_group">
                        <label htmlFor="type">Job Type</label>
                        <select name="type" id="type">
                            <option value='Full-Time'>Full-Time</option>
                            <option value='Part-Time'>Part-Time</option>
                            <option value='Remote'>Remote</option>
                            <option value='Internship'>Internship</option>
                        </select>
                    </div>

                    {/* JOB NAME */}
                    <div className="input_group">
                        <label htmlFor="title">Job Name</label>
                        <input type="text" name="title" id="title" />
                    </div>

                    {/* DESCRIPTION */}
                    <div className="input_group">
                        <label htmlFor='description'>Description</label>
                        <textarea id='description' name='description' rows='4' placeholder='Add any job duties, expectations, requirements, etc'
                        ></textarea>
                    </div>

                    <div className="input_wrapper">
                        {/* SALARY */}
                        <div className='input_group'>
                            <label htmlFor='salary'>Salary</label>
                            <select id='salary' name='salary'>
                                <option value='Under $50K'>Under $50K</option>
                                <option value='$50K - 60K'>$50K - $60K</option>
                                <option value='$60K - 70K'>$60K - $70K</option>
                                <option value='$70K - 80K'>$70K - $80K</option>
                                <option value='$80K - 90K'>$80K - $90K</option>
                                <option value='$90K - 100K'>$90K - $100K</option>
                                <option value='$100K - 125K'>$100K - $125K</option>
                                <option value='$125K - 150K'>$125K - $150K</option>
                                <option value='$150K - 175K'>$150K - $175K</option>
                                <option value='$175K - 200K'>$175K - $200K</option>
                                <option value='Over $200K'>Over $200K</option>
                            </select>
                        </div>

                        {/* LOCATION */}
                        <div className='input_group'>
                            <label htmlFor="location">Location</label>
                            <input
                                type='text'
                                id='location'
                                name='location'
                                placeholder='Company Location'
                            />
                        </div>
                    </div>

                    <h3>Company Info</h3>

                    {/* COMPANY NAME */}
                    <div className='input_group'>
                        <label htmlFor='company'>Company Name</label>
                        <input
                            type='text'
                            id='company'
                            name='company'
                            placeholder='Company Name'
                        />
                    </div>

                    {/* COMPANY DESCRIPTION */}
                    <div className='input_group'>
                        <label htmlFor='company_description'>
                            Company Description
                        </label>
                        <textarea
                            id='company_description'
                            name='company_description'
                            rows='4'
                            placeholder='What does your company do?'
                        ></textarea>
                    </div>

                    <div className="input_wrapper">
                        {/* COMPANY EMAIL */}
                        <div className='input_group'>
                            <label htmlFor='contact_email'>Contact Email</label>
                            <input
                                type='email'
                                id='contact_email'
                                name='contact_email'
                                placeholder='Email address for applicants'
                                required
                            />
                        </div>

                        {/* COMPANY PHONE */}
                        <div className='input_group'>
                            <label htmlFor='contact_phone'>Contact Phone</label>
                            <input
                                type='tel'
                                id='contact_phone'
                                name='contact_phone'
                                placeholder='Optional phone for applicants'
                            />
                        </div>
                    </div>
                    <div className="bottom">
                        <h5>* required fields</h5>
                        <button type='submit' className='btn_dark'>Post Job</button>
                    </div>
                </form >
            </div >
        </div>
    )
}
