import React, { useEffect } from 'react';
import { Form, Input, Modal } from '@arco-design/web-react';
import type { PermissionBoundaryPackageRecord } from '@/api/permission-boundary-package';
import styles from '../tenants/style/index.module.less';

export type PackageModalValues = {
  id?: number;
  packageName: string;
  description?: string;
};

type Props = {
  visible: boolean;
  record: PermissionBoundaryPackageRecord | null;
  onCancel: () => void;
  onSubmit: (values: PackageModalValues) => Promise<void>;
};

export default function PermissionPackageModal({
  visible,
  record,
  onCancel,
  onSubmit,
}: Props) {
  const [form] = Form.useForm<PackageModalValues>();

  useEffect(() => {
    if (!visible) {
      return;
    }
    if (record) {
      form.setFieldsValue({
        id: record.id,
        packageName: record.packageName,
        description: record.description || '',
      });
    } else {
      form.resetFields();
    }
  }, [form, record, visible]);

  return (
    <Modal
      title={record ? '编辑权限边界包' : '新增权限边界包'}
      visible={visible}
      onCancel={onCancel}
      onOk={async () => {
        const values = await form.validate();
        await onSubmit(values);
      }}
      unmountOnExit
      style={{ width: 'min(560px, calc(100vw - 32px))' }}
    >
      <Form
        form={form}
        layout="horizontal"
        labelAlign="left"
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 19 }}
        className={styles['search-form']}
      >
        <Form.Item field="id" hidden>
          <Input />
        </Form.Item>
        <Form.Item
          label="权限包名称"
          field="packageName"
          rules={[{ required: true, message: '请输入权限包名称' }]}
        >
          <Input placeholder="如 默认租户权限包" />
        </Form.Item>
        <Form.Item label="描述" field="description">
          <Input.TextArea
            autoSize={{ minRows: 3, maxRows: 5 }}
            placeholder="说明该权限包适用的租户类型和功能边界"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}
