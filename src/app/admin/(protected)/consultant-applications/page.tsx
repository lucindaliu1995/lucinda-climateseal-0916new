import { listConsultantPartnerApplications } from '@/lib/admin-store';

export default async function ConsultantApplicationsPage() {
  const applications = await listConsultantPartnerApplications();

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Consultant applications</h1>
          <p className="mt-1 text-sm text-slate-600">
            Consultant Partner Program applications are stored here for review.
          </p>
        </div>
        <a
          href="/api/admin/export?type=consultant-applications"
          className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          Export CSV
        </a>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-slate-500">
              <th className="px-3 py-3 font-medium">Submitted</th>
              <th className="px-3 py-3 font-medium">Name</th>
              <th className="px-3 py-3 font-medium">Company</th>
              <th className="px-3 py-3 font-medium">Region</th>
              <th className="px-3 py-3 font-medium">Type</th>
              <th className="px-3 py-3 font-medium">Team size</th>
              <th className="px-3 py-3 font-medium">Industries</th>
              <th className="px-3 py-3 font-medium">Project types</th>
              <th className="px-3 py-3 font-medium">Next 3 months</th>
              <th className="px-3 py-3 font-medium">Referral</th>
              <th className="px-3 py-3 font-medium">Links</th>
              <th className="px-3 py-3 font-medium">Notes</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application) => (
              <tr key={application.id} className="border-b border-slate-100 align-top">
                <td className="px-3 py-4 text-slate-500">{new Date(application.submittedAt).toLocaleString()}</td>
                <td className="px-3 py-4">
                  <p className="font-medium text-slate-900">{application.name}</p>
                  <p className="mt-1 text-slate-600">{application.email}</p>
                </td>
                <td className="px-3 py-4 text-slate-700">{application.company}</td>
                <td className="px-3 py-4 text-slate-700">{application.countryRegion}</td>
                <td className="px-3 py-4 text-slate-700">{application.consultantType}</td>
                <td className="px-3 py-4 text-slate-700">{application.teamSize}</td>
                <td className="px-3 py-4 text-slate-700">{application.clientIndustries.join(', ')}</td>
                <td className="px-3 py-4 text-slate-700">{application.projectTypes.join(', ')}</td>
                <td className="px-3 py-4 text-slate-700">{application.expectedProjectsNext3Months}</td>
                <td className="px-3 py-4 text-slate-700">{application.wantsReferralAccess ? 'Yes' : 'No'}</td>
                <td className="px-3 py-4 text-slate-700">
                  <div className="space-y-1">
                    {application.website ? <p>{application.website}</p> : null}
                    {application.linkedin ? <p>{application.linkedin}</p> : null}
                    {!application.website && !application.linkedin ? '—' : null}
                  </div>
                </td>
                <td className="max-w-sm px-3 py-4 text-slate-700">
                  <p className="font-medium text-slate-900">{application.status}</p>
                  <p className="mt-1">{application.message || '—'}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {applications.length === 0 ? (
          <p className="py-8 text-center text-sm text-slate-500">No consultant applications yet.</p>
        ) : null}
      </div>
    </div>
  );
}
