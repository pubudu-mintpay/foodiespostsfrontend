import {useEffect, useState} from "react";

const Account = () => {

    const EMAIL = 'pubbe@gmail.com'
    const NAME = 'Pubbe weerasignge'

    const settings = [
        {
            title: 'Full name',
            value: NAME,
            isEditing: false,
        },
        {
            title: 'Email address',
            value: EMAIL,
            isEditing: false,
        }
    ]

    const [settingsState, setSettingsState] = useState(settings)
    const [fullName, setFullName] = useState(settingsState[0].value)
    const [email, setEmail] = useState(settingsState[1].value)


    const changeEditMode = (index: number) => {

        setSettingsState(settingsState.map((setting, i) => {
            if (i === index) {
                return {
                    ...setting,
                    isEditing: true,
                }
            }
            return {
                ...setting,
                isEditing: false,
            }
        }))
    }


    const saveChanges = (index: number) => {
        setSettingsState(settingsState.map((setting, i) => {
            if (i === index) {
                return {
                    ...setting,
                    isEditing: false,
                    value: setting.title === 'Full name' ? fullName : email,
                }
            }
            return {
                ...setting,
                isEditing: false,
            }
        }))
    }


    useEffect(() => {
        const data = settingsState.map((setting) => {
            return {
                title: setting.title,
                value: setting.value,
            }
        })
        console.log('data', JSON.stringify(data))
    }, [settingsState])

    return (
        <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20 max-w-7xl mx-auto ">
            <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none lg:px-20">
                <div>
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-500">
                        This information will be displayed publicly so be careful what you share.
                    </p>

                    <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6">
                        {settingsState.map((setting, index) => (
                            <div className="pt-6 sm:flex">
                                <dt className="font-medium text-gray-900 sm:w-64 sm:flex-none sm:pr-6">{setting.title}</dt>
                                <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                    {setting.isEditing ? <>
                                            <input
                                                value={setting.title === 'Full name' ? fullName : email}
                                                onChange={(e) => setting.title === 'Full name' ? setFullName(e.target.value) : setEmail(e.target.value)}
                                                type={setting.title === 'Full name' ? 'text' : 'email'}
                                                className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"

                                            />
                                            <button
                                                onClick={() => saveChanges(index)}
                                                type="button"
                                                className="font-semibold text-indigo-600 hover:text-indigo-500">
                                                Save
                                            </button>
                                        </> :
                                        <>
                                            <div className="text-gray-900">{setting.value}</div>
                                            <button
                                                onClick={() => changeEditMode(index)}
                                                type="button"
                                                className="font-semibold text-indigo-600 hover:text-indigo-500">
                                                Update
                                            </button>
                                        </>
                                    }
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </main>
    );
};

export default Account;