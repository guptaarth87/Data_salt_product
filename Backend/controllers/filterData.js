const patients=require("../modals/Patients")

exports.datafilteration=(req,res)=>{
    const {
        name,
        mobileNo,
        AdharNo,
        start_date,
        end_date
    } =req.body;

    let filters = {};
    
    //Apply filters
    if (name) {
        filters.name = name;
    }
    
    if (mobileNo){
        filters.mobileNo=mobileNo;
    }

    if (AdharNo){
        filters.AdharNo=AdharNo;
    }
    
    if (start_date && end_date){
       filters.date={
           $gte:start_date,
           $lte:end_date
       }
    }
    if (start_date && !end_date){
        filters.date={
            $gte:start_date
        }
    }
    if (!start_date && end_date){
        filters.date={
            $lte:end_date
        }
    }


    patients.find(filters).sort({"date":1}).then(result=>{
        res.status(200).json({
            message: `Filtered Results fetched`,
           patients:result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Error in Database",
            error: error
        });
       })
}