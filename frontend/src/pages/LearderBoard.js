const LeaderBoard=()=>{
    const list = [
        {
            "name": 'Dulshan Siriwardhana',
            "rating": 2000
        },
        {
            "name": 'Sathsara Madhushan',
            "rating": 1900
        },
        {
            "name": 'Dasun Oshan',
            "rating": 1800
        },
        {
            "name": 'Lasindu Malshan',
            "rating": 1700
        },
        {
            "name": 'Sasanda Manahara',
            "rating": 1600
        },
        {
            "name": 'Shanilka Manchanayaka',
            "rating": 1500
        },
        {
            "name": 'Madhushani Rajapaksha',
            "rating": 1400
        },
        {
            "name": 'Hashini Fernando',
            "rating": 1300
        },
        {
            "name": 'Nadeesha Prasadini',
            "rating": 1200
        },
        {
            "name": 'Tharuka Sandarenu',
            "rating": 1100
        }
    ]
    return(
        <div className="flex flex-col justify-center items-center gap-2 p-2">
            <div className="flex flex-col justify-center items-center border p-10">
                <div className="text-white">Top 3 section</div>
                <div>
                    <div className="flex flex-row justify-between gap-2 text-white">
                        <h>{list[0].name}</h>
                        <h>{list[0].rating}</h>
                    </div>
                    <div className="flex flex-row justify-between gap-2 text-white">
                        <h>{list[1].name}</h>
                        <h>{list[1].rating}</h>
                    </div>
                    <div className="flex flex-row justify-between gap-2 text-white">
                        <h>{list[2].name}</h>
                        <h>{list[2].rating}</h>
                    </div>
                </div>
            </div>
            <div className="text-white flex flex-col justify-center items-center border p-10">
                <div>Other List</div>
                <div>
                    {
                        list.slice(3).map((i)=>(
                            <div className="flex flex-row justify-between gap-2">
                                <h>{i.name}</h>
                                <h>{i.rating}</h>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
export default LeaderBoard;