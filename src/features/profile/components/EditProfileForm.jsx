import { useState, useRef, useEffect } from 'react';
import { SelectPicker } from 'rsuite';
import { toast } from 'react-toastify';
import Avatar from '../../../global_components/Avatar';
import useProfileContext from '../hook/useProfileContext';
import getProvince from '../../../api/province';
import { authMe } from '../../../api/auth';
import Input from '../../../global_components/Input';
import useAuth from '../../auth/hooks/auth';
import { LineIcon } from '../../../icons';

function EditProfileForm() {
  //   const ProfileContextObject = useProfileContext();

  //   console.log(ProfileContextObject, 'from Edit Profile form');

  const profileImageEl = useRef(null);
  const [profileImage, setProfileImage] = useState();
  const [input, setInput] = useState(null);
  const [province, setProvince] = useState(null);
  const [district, setDistrict] = useState(null);
  const [subDistrict, setSubDistrict] = useState(null);
  const [oldData, setOldData] = useState(null);
  const [loading, setLoading] = useState(true);
  const allAuthObj = useAuth();

  const { authUser } = allAuthObj;
  console.log(authUser);
  // console.log(province[0]?.Districts, '8;ppppppppppppppp');

  console.log(oldData);

  const fetchProvince = async () => {
    try {
      setLoading(true);
      const responseProvince = await getProvince();
      setProvince(responseProvince?.data);
      console.log(responseProvince?.data);
      const responseUserInfo = await authMe();
      setOldData(responseUserInfo?.data);
      setInput({
        ...input,
        // userName: responseUserInfo?.data?.userName,
        profileImage: responseUserInfo?.data?.profileImage,
        address: responseUserInfo?.data?.UserAddress?.address,
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (!district && province && oldData) {
    setDistrict(
      province?.find((value) => value.id === oldData?.UserAddress?.provinceId)
        .Districts
    );
  }

  if (!subDistrict && district && oldData) {
    setSubDistrict([]);

    setSubDistrict(
      district?.find((value) => value.id === oldData?.UserAddress?.districtId)
        .SubDistricts
    );
  }

  useEffect(() => {
    fetchProvince();
  }, []);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSelectPicker = (value, item, event) => {
    setInput({ ...input, [item.name]: value });
    if (item.name === 'provinceId') {
      setDistrict(province[item.index].Districts);
      setSubDistrict([]);
      setInput((prev) => {
        delete prev.districtId;

        return prev;
      });
    }

    if (item.name === 'districtId') {
      setSubDistrict(district[item.index].SubDistricts);
    }
  };

  let districtData;
  let subDistrictData;
  const provinceData = province?.map((provinces, index) => ({
    label: provinces.provinceNameEn,
    value: provinces.id,
    name: 'provinceId',
    index,
  }));

  if (district) {
    districtData = district?.map((districts, index) => ({
      label: districts?.districtNameEn,
      value: districts?.id,
      name: 'districtId',
      index,
    }));
  }

  if (subDistrict) {
    subDistrictData = subDistrict?.map((subDistricts, index) => ({
      label: subDistricts?.subdistrictNameEn,
      value: subDistricts?.id,
      name: 'subDistrictId',
      index,
    }));
  }

  // const handleSubmitEdit = (e) => {
  //   try {
  //     e.preventDefault();

  //     if (!input.userName || input.userName.trim() === '') {
  //       return toast.error('please fill your username');
  //     }
  //     const formData = new FormData();
  //     const propertiesToAppend = [
  //       'userName',
  //       'provinceId',
  //       'districtId',
  //       'subDistrictId',
  //         'address',
  //     ];

  //     propertiesToAppend.forEach((property) => {
  //       if (input?.[property]) {
  //         formData.append(property, input[property]);
  //       }
  //     });

  //     if (profileImage) {
  //       formData.append('profileImage', profileImage);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  console.log(input);
  if (loading) {
    return (
      <div className='h-dvh w-dvw flex justify-center items-center animate-pulse'>
        loading...
      </div>
    );
  }
  return (
    <div className='w-full flex flex-col gap-4 justify-center items-center'>
      <form className='border-2 rounded-lg w-full flex flex-col p-3 gap-3'>
        <div className='p-3 border-b-2 w-full'>Edit your profile</div>
        <input
          type='file'
          ref={profileImageEl}
          className='hidden'
          onChange={(e) => {
            if (e.target.files[0]) {
              setProfileImage(e.target.files[0]);
            }
          }}
        />
        <div className='self-center'>
          <button
            type='button'
            onClick={() => profileImageEl.current.click()}
            aria-label='Save'
          >
            <Avatar
              src={
                profileImage
                  ? URL.createObjectURL(profileImage)
                  : input?.profileImage
              }
            />
          </button>
        </div>
        <div className='w-full'>
          <Input
            title='Username'
            name='userName'
            value={input?.userName ? input : oldData}
            onChange={handleChangeInput}
          />
        </div>

        {authUser?.role === 'ORGANIZER' ? (
          <div>
            <div className='w-full'>
              <span className='text-[0.8rem]'>Province</span>
              <SelectPicker
                block
                placeholder='province'
                data={provinceData}
                value={
                  input?.provinceId
                    ? input?.provinceId
                    : oldData?.UserAddress?.provinceId
                }
                onSelect={handleSelectPicker}
              />
            </div>
            <div className='w-full'>
              <span className='text-[0.8rem]'>District</span>
              <SelectPicker
                block
                placeholder='district'
                data={districtData}
                onSelect={handleSelectPicker}
                value={
                  input?.districtId
                    ? input?.districtId
                    : oldData?.UserAddress?.districtId
                }
              />
            </div>
            <div className='w-full'>
              <span className='text-[0.8rem]'>Sub-District</span>
              <SelectPicker
                block
                placeholder='sub-district'
                data={subDistrictData}
                onSelect={handleSelectPicker}
                value={
                  input?.subDistrictId
                    ? input?.subDistrictId
                    : oldData?.UserAddress?.subDistrictId
                }
              />
            </div>
            <div className='flex flex-col'>
              <span className='text-[0.8rem]'>Address</span>
              <textarea
                placeholder='address'
                className='textarea textarea-bordered textarea-lg w-full  text-[0.75rem]'
                name='address'
                value={input?.address}
                onChange={handleChangeInput}
              />
            </div>
          </div>
        ) : null}

        <div className='flex gap-3 justify-end'>
          <button type='button' className='btn '>
            cancel
          </button>
          <button type='submit' className='btn '>
            save
          </button>
        </div>
      </form>
      <div className='p-3 w-full '>
        <button
          className='flex justify-center items-center gap-3 border p-4 rounded-lg w-full bg-[#00B900] font-bold text-white'
          type='button'
          aria-label='Save'
        >
          Blinding Line{' '}
          <span>
            <LineIcon />
          </span>
        </button>
      </div>
    </div>
  );
}

export default EditProfileForm;
