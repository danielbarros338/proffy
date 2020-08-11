module.exports = async function (db, {proffyValue, classValues, classScheduleValues}) {
    //Inserir dados na tabela de proffys
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)//Nesessário uso da palavra async para usar o await

    const proffy_id = insertedProffy.lastID;

    //Inserir dados na tabela classes
    const insertedClass = await db.run(`
            INSERT INTO classes (
                subject,
                cost,
                proffy_id
            ) VALUES (
                "${classValues.subject}",
                "${classValues.cost}",
                "${proffy_id}"
            );
    `)

    const class_id = insertedClass.lastID;

    //inserir dados na tabela classSchedule
    const insertedAllClassesSchedulesValues = classScheduleValues.map((classScheduleValue) => {
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${classScheduleValue.weekday}",
                "${classScheduleValue.time_from}",
                "${classScheduleValue.time_to}"
            );
        `)
    })

    //Aqui vou executar todos os db.runs() das class_schedules
    await  Promise.all(insertedAllClassesSchedulesValues);

};