import Input from '../../../global_components/Input';

export default function EditInput({ input, onChange }) {
  return (
    <>
      <Input
        name='website'
        placeholder='Web Site'
        value={input}
        onChange={onChange}
        title='Web Site'
      />

      <Input
        name='email'
        placeholder='Email'
        value={input}
        onChange={onChange}
        title='Email'
      />

      <Input
        name='facebook'
        placeholder='Facebook'
        value={input}
        onChange={onChange}
        title='Facebook'
      />

      <Input
        name='telNumber'
        placeholder='Telephone'
        value={input}
        onChange={onChange}
        title='Telephone'
      />

      <Input
        name='address'
        placeholder='Address'
        value={input}
        onChange={onChange}
        title='Address'
      />

      <Input
        name='address2'
        placeholder='Address(optional)'
        value={input}
        onChange={onChange}
        title='Address(optional)'
      />
    </>
  );
}
